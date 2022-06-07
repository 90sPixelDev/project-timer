import React, { useState, useEffect } from 'react';
import { db } from './firebase.config';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import BodyWrapper from './components/ui/BodyWrapper';
import Header from './components/ui/Header';
import Body from './components/ui/Body';

function App() {
    const [projects, setProjects] = useState([]);
    const projectsCollectionRef = collection(db, 'projects');

    // useEffect(() => {
    //     const getProjects = async () => {
    //         const data = await getDocs(projectsCollectionRef);
    //         setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //     };

    //     // getProjects();
    // });

    return (
        <>
            {/* <BodyWrapper> */}
            <Header />
            <Body>
                <div>TEST</div>
            </Body>
            {/* </BodyWrapper> */}
        </>
    );
}

export default App;
