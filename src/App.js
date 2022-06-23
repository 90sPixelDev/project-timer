import React, { useState, useEffect, useContext, useReducer } from 'react';
import { db } from './firebase.config';
import { collection, getDocs, addDoc } from 'firebase/firestore';
// import BodyWrapper from './components/ui/BodyWrapper';
import Header from './components/ui/Header';
import Body from './components/ui/Body';
import Timer from './components/timer/Timer';
import StartStopTimerProvider from './context/StartStopTimerProvider';
import ProjectList from './components/projects/ProjectList';

function App() {
    const projects = [
        { title: 'Self-Portrait', days: 0, hours: 3, minutes: 27 },
        {
            title: 'Landscape',
            days: 0,
            hours: 1,
            minutes: 10
        },
        {
            title: 'Webshow Poster',
            days: 2,
            hours: 5,
            minutes: 39
        },
        {
            title: 'Dungeon Art',
            days: 0,
            hours: 9,
            minutes: 24
        }
    ];

    return (
        <StartStopTimerProvider>
            <Header />
            <Body>
                {/* <Timer project={projects.project1}></Timer> */}
                <ProjectList projects={projects} />
            </Body>
        </StartStopTimerProvider>
    );
}

export default App;
