import React, { useState, useEffect, useCallback } from 'react';
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
    const [selectedProject, setSelectedProject] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const initialSelectedProject = () => {
        console.log('Running Selected Project func!');
        if (projects !== null && projects !== undefined && projects.length > 0) {
            setSelectedProject(projects[0]);
            setIsLoading(false);
        }
    };

    const getProjects = useCallback(async () => {
        try {
            const projectsRef = ref(db);
            onValue(projectsRef, (snapshot) => {
                const data = snapshot.val();
                const projectArr = Object.entries(data.projects);
                setProjects(projectArr);
            });
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        console.log('Running!');
        getProjects();
    }, [getProjects]);

    useEffect(() => {
        initialSelectedProject();
    }, [projects]);

    const selectProjectHandler = (projID) => {
        const project = projects.find((proj) => projID === proj[0]);
        console.log(project);
        setSelectedProject(project);
    };

    const reloadUpdatedProjectHandler = () => {
        setIsLoading(true);
    };

    return (
        <StartStopTimerProvider>
            {/* <Header /> */}
            <Body>
                {isLoading && <p>Loading Projects...</p>}
                {!isLoading && (
                    <Timer project={selectedProject} reloaded={reloadUpdatedProjectHandler} />
                )}
                {!isLoading && (
                    <ProjectList projects={projects} onSelectedProject={selectProjectHandler} />
                )}
                <NewProject />
            </Body>
        </StartStopTimerProvider>
    );
}

export default App;
