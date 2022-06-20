import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import TimeText from './TimeText';
import Circle from './Circle';
import StartStopBtn from './StartStopBtn';
import ProjectName from './ProjectName';
import StartStopTimerContext from '../../context/StartStopTimerContext';

const defaultProjectInfo = { days: 0, hours: 0, minutes: 0, title: 'Placeholder Project Name' };

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
        timerContext.switch();
    };

    useEffect(() => {
        if (secondCount > 113) {
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
            const addSeconds = setInterval(() => {
                setSecondCount((sec) => sec + 1.883333333333333);
                setHRCount((hr) => hr + 0.0011805555555556);
                setMinCount((min) => min + 0.0211111111111111);
            }, 1000);
            return () => clearInterval(addSeconds);
        }
    });

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
