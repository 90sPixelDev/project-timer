import React, { useState, useContext, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import TimeText from './TimeText';
import Circle from './Circle';
import StartStopBtn from './StartStopBtn';
import ProjectName from './ProjectName';
import StartStopTimerContext from '../../context/StartStopTimerContext';
import { db } from '../../firebase_config';
import { ref, push, child, update } from 'firebase/database';

const Timer = (props) => {
    const classes = {
        container: 'grid w-[70%] sm:max-w-[60vh]'
    };

    const timerContext = useContext(StartStopTimerContext);

    const [projectName, setProjectName] = useState(props.project.title);
    const [projectDays, setProjectDays] = useState(props.project.days);
    const [projectHours, setProjectHours] = useState(props.project.hours);
    const [projectMinutes, setProjectMinutes] = useState(props.project.minutes);
    const [secondCount, setSecondCount] = useState(0);
    const [hrCount, setHRCount] = useState(
        props.project.hours * 4.25 + props.project.minutes * 0.0559210526315789
    );
    const [minCount, setMinCount] = useState(props.project.minutes * 1.266666666666667);

    const switchHandler = () => {
        if (timerContext.working) {
            // something
        }
        timerContext.switch();
        console.log(timerContext);
    };

    useEffect(() => {
        if (secondCount >= 113) {
            console.log('went over 113!');
            setProjectMinutes((state) => state + 1);
            console.log(projectMinutes);
            setSecondCount((sec) => (sec = 0));
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
            console.log('Timer Working!');
            const addSeconds = setInterval(() => {
                setSecondCount((sec) => sec + 1.883333333333333);
                setHRCount((hr) => hr + 0.0011805555555556);
                setMinCount((min) => min + 0.0211111111111111);
            }, 50);
            return () => clearInterval(addSeconds);
        }
    }, [timerContext, projectDays, projectHours, projectMinutes, secondCount]);

    return (
        <div className={classes.container}>
            <ProjectName projectName={projectName} />
            <TimeText days={projectDays} hours={projectHours} minutes={projectMinutes} />
            <Circle sec={secondCount} min={minCount} hr={hrCount} />
            <StartStopBtn onClick={switchHandler} />
        </div>
    );
};

Timer.propTypes = {
    project: PropTypes.object
};

export default Timer;
