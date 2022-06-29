import React, { useState, useContext, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import TimeText from './TimeText';
import Circle from './Circle';
import StartStopBtn from './StartStopBtn';
import ProjectName from './ProjectName';
import StartStopTimerContext from '../../context/StartStopTimerContext';
import DeleteProjectBtn from './DeleteProjectBtn';
import { db } from '../../firebase_config';
import { ref, update } from 'firebase/database';

const Timer = (props) => {
    const classes = {
        container: 'grid w-[70%] sm:max-w-[60vh]',
        buttonsParent: 'flex gap-2 justify-evenly'
    };

    const timerContext = useContext(StartStopTimerContext);

    //Actual Project times
    const [projectName, setProjectName] = useState(props.project[1].title);
    const [projectDays, setProjectDays] = useState(props.project[1].days);
    const [projectHours, setProjectHours] = useState(props.project[1].hours);
    const [projectMinutes, setProjectMinutes] = useState(props.project[1].minutes);
    const [projectSeconds, setProjectSeconds] = useState(props.project[1].seconds);

    // Visual clock nums
    const [secondCount, setSecondCount] = useState(props.project[1].seconds * 1.883333333333333);
    const [hrCount, setHRCount] = useState(
        props.project[1].hours * 4.25 + props.project[1].minutes * 0.0559210526315789
    );
    const [minCount, setMinCount] = useState(
        props.project[1].minutes * 1.266666666666667 + props.project[1].seconds * 0.0211111111111111
    );

    const saveProjectTime = () => {
        const updatedTime = {
            title: projectName,
            days: projectDays,
            hours: projectHours,
            minutes: projectMinutes,
            seconds: projectSeconds
        };

        const updateData = {};
        updateData['/projects/' + props.project[0]] = updatedTime;
        return update(ref(db), updateData);
    };

    const switchHandler = () => {
        if (timerContext.working) {
            saveProjectTime();
        }
        timerContext.switch();
        console.log(timerContext);
    };

    const updateProjectVisual = useCallback(() => {
        setProjectName(props.project[1].title);
        setProjectDays(props.project[1].days);
        setProjectHours(props.project[1].hours);
        setProjectMinutes(props.project[1].minutes);
        setProjectSeconds(props.project[1].seconds);

        setSecondCount(props.project[1].seconds * 1.883333333333333);

        setHRCount(props.project[1].hours * 4.25 + props.project[1].minutes * 0.0559210526315789);
        setMinCount(
            props.project[1].minutes * 1.266666666666667 +
                props.project[1].seconds * 0.0211111111111111
        );
    }, [props.project]);

    useEffect(() => {
        updateProjectVisual();
    }, [updateProjectVisual]);

    useEffect(() => {
        console.log(minCount);
        if (secondCount >= 113) {
            console.log('went over 113!');
            setProjectMinutes((state) => state + 1);
            console.log(projectMinutes);
            setSecondCount(0);
            setProjectSeconds(0);
            if (projectMinutes >= 59) {
                setProjectMinutes((min) => (min = 0));
                setProjectHours((hour) => hour + 1);
                if (projectHours >= 23) {
                    setProjectDays((day) => day + 1);
                    setProjectHours((hour) => (hour = 0));
                }
            }
        }
        if (hrCount > 50) {
            setHRCount((hr) => (hr = 0));
        }
        if (timerContext.working) {
            const addSeconds = setInterval(() => {
                setSecondCount((sec) => sec + 1.883333333333333);
                setProjectSeconds((sec) => sec + 1);
                setMinCount((min) => min + 0.0211111111111111);
                setHRCount((hr) => hr + 0.0011805555555556);
            }, 1000);
            return () => clearInterval(addSeconds);
        }
    }, [timerContext, projectDays, projectHours, projectMinutes, secondCount]);

    return (
        <div className={classes.container}>
            <ProjectName projectName={projectName} />
            <TimeText days={projectDays} hours={projectHours} minutes={projectMinutes} />
            <Circle sec={secondCount} min={minCount} hr={hrCount} />
            <div className={classes.buttonsParent}>
                <StartStopBtn onClick={switchHandler} />
                <DeleteProjectBtn projectID={props.project[0]} />
            </div>
        </div>
    );
};

Timer.propTypes = {
    project: PropTypes.array,
    reloaded: PropTypes.func
};

export default Timer;
