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

    const dummyProject = [
        {
            title: 'Test Portrait',
            days: 1,
            hours: 3,
            minutes: 12
        }
    ];

    const getProjects = useCallback(async () => {
        try {
            const projectsRef = ref(db);
            onValue(projectsRef, (snapshot) => {
                const data = snapshot.val();
                // console.log(data.projects);
                // const proj = data.projects.forEach((project) => {
                //     const prj = { id: project.key, title: project.title };
                //     return prj;
                // });
                // console.log(proj);
                const projectArr = Object.entries(data.projects);
                // const testObj = Object.fromEntries(projectArr);
                // console.log(projectArr);
                setProjects(projectArr);
                // setSelectedProject(projectArr[0]);
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

    const selectProjectHandler = (projID) => {
        const project = projects.find((proj) => projID === proj[0]);
        console.log(project);
        setSelectedProject((prevProj) => (prevProj = project));
    };

    return (
        <StartStopTimerProvider>
            <Header />
            <Body>
                {isLoading && <p>Loading Projects...</p>}
                {!isLoading && <Timer project={dummyProject[0]} />}
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
