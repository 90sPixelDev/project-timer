import React, { useState, useEffect, useCallback } from 'react';
// import { db } from './firebase.config';
import { collection, getDocs, addDoc } from 'firebase/firestore';
// import BodyWrapper from './components/ui/BodyWrapper';
import Header from './components/ui/Header';
import Body from './components/ui/Body';
import Timer from './components/timer/Timer';
import StartStopTimerProvider from './context/StartStopTimerProvider';
import ProjectList from './components/projects/ProjectList';
import NewProject from './components/forms/NewProject';
import { db } from './firebase_config';
import { ref, onValue } from 'firebase/database';

function App() {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const getProjects = useCallback(async () => {
        try {
            const projectsRef = ref(db);
            onValue(projectsRef, (snapshot) => {
                const data = snapshot.val();
                const projectArr = Object.values(data.projects);
                setProjects(projectArr);
                setSelectedProject(projectArr[0]);
                if (projects !== null || projects.length > 0 || projects === undefined) {
                    setIsLoading(false);
                }
            });
        } catch (err) {
            console.log(err);
        }
        console.log('Getting Projects');
    }, []);

    useEffect(() => {
        getProjects();
    }, [getProjects]);

    const selectProjectHandler = (projName) => {
        const project = projects.find((proj) => projName === proj.title);
        setSelectedProject((prevProj) => (prevProj = project));
    };

    return (
        <StartStopTimerProvider>
            <Header />
            <Body>
                {isLoading && <p>Loading Projects...</p>}
                {!isLoading && <Timer project={selectedProject} />}
                {/* <Timer project={selectedProject} /> */}
                {!isLoading && (
                    <ProjectList projects={projects} onSelectedProject={selectProjectHandler} />
                )}
                <NewProject />
            </Body>
        </StartStopTimerProvider>
    );
}

export default App;
