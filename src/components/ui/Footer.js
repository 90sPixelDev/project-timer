import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer(props) {
    const classes = {
        footer: 'w-full h-fit py-2 bg-blue-700 flex flex-col',
        content: 'm-auto',
        row: 'flex flex-row justify-center',
        text: 'text-white mx-auto text-center mx-2 text-sm',
        links: 'text-white mx-auto text-center mx-2 text-sm underline decoration-solid',
        icon: 'my-auto text-white'
    };

    const linkedInIcon = <FontAwesomeIcon className={classes.icon} icon={faLinkedin} />;
    const gitHubIcon = <FontAwesomeIcon className={classes.icon} icon={faGithub} />;
    const homeIcon = <FontAwesomeIcon className={classes.icon} icon={solid('house')} />;

    return (
        <footer className={classes.footer}>
            <div className={classes.content}>
                <div className={classes.row}>
                    {homeIcon}
                    <a
                        className={classes.links}
                        href="http://lienfont.dev"
                        target="_blank"
                        rel="noreferrer">
                        Portfolio Website
                    </a>
                    <p className={classes.text}>|</p>
                    {gitHubIcon}
                    <a
                        className={classes.links}
                        href="https://github.com/90sPixelDev"
                        target="_blank"
                        rel="noreferrer">
                        My GitHub
                    </a>
                    <p className={classes.text}>|</p>

                    {linkedInIcon}
                    <a
                        className={classes.links}
                        href="https://www.linkedin.com/in/lien-font-developer/"
                        target="_blank"
                        rel="noreferrer">
                        LinkedIn
                    </a>
                </div>
                <p className={classes.text}>
                    Created, designed, and developed with ❤️ by Lien Font &copy; 2022
                </p>
            </div>
        </footer>
    );
}

export default Footer;
