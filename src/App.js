import React, { useState, useEffect, useContext, useReducer } from 'react';
import { db } from './firebase.config';
import { collection, getDocs, addDoc } from 'firebase/firestore';
// import BodyWrapper from './components/ui/BodyWrapper';
import Header from './components/ui/Header';
import Body from './components/ui/Body';
import Timer from './components/timer/Timer';
import StartStopTimerProvider from './context/StartStopTimerProvider';

function App() {
    const projects = {
        project1: { title: 'Self-Portrait', days: 0, hours: 3, minutes: 27 },
        project2: {
            title: 'Landscape',
            days: 0,
            hours: 1,
            minutes: 10
        },
        project3: {
            title: 'Webshow Poster',
            days: 2,
            hours: 5,
            minutes: 39
        },
        project4: {
            title: 'Dungeon Art',
            days: 0,
            hours: 9,
            minutes: 24
        }
    };

    return (
        <StartStopTimerProvider>
            <Header />
            <Body>
                <Timer project={projects.project1}></Timer>
            </Body>
        </StartStopTimerProvider>
    );
}

export default App;
