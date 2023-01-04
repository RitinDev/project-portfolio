import { useState } from 'react';
import { ShareAltOutlined, RightOutlined, GithubOutlined } from '@ant-design/icons';
import { Card } from 'antd';

const { Meta } = Card;

type ProjectCardProps = {
    projectName: string;
    projectDescription: string;
    projectContributors: contributorTypes;
    projectImage: string;
    projectLink: string;
    projectGithub: string;
};
type contributorTypes = 'Individual' | 'Team';

const ProjectCard = (props: ProjectCardProps) => {
    const [shareButtonClicked, setShareButtonClicked] = useState(false);

    return (
        <Card
            style={{ 
                width: 300,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
            cover={
                <img
                    style={
                        {
                            height: '225px',
                            objectFit: 'cover',
                            objectPosition: 'top',
                            position: 'relative',
                            top: '5px',
                            width: '95%',
                            margin: 'auto',
                        }
                    }
                    alt={props.projectName}
                    src={props.projectImage}
                />
            }
            actions={[
                <GithubOutlined key="github"
                style={{
                    color: props.projectGithub ? '' : 'lightgray',
                    // Note that the default color is '' instead of 'black' to preserve default hover color
                    cursor: props.projectGithub ? 'pointer' : 'default',
                }} 
                onClick={() => 
                    props.projectGithub && window.open(props.projectGithub, '_blank') // Ensure that the link exists before opening it
                } />,
                <RightOutlined key="go-to-page" onClick={() => window.open(props.projectLink, '_blank')} />,
                <ShareAltOutlined key="share" style={{
                    color: shareButtonClicked ? 'lightseagreen' : '',
                }} onClick={() => {
                    navigator.clipboard.writeText(props.projectLink);
                    setShareButtonClicked(true);
                    setTimeout(() => {
                        setShareButtonClicked(false);
                    }, 1000);
                }
                } />,
            ]}
        >
            <Meta
                title={props.projectName}
                description={
                    <div style={{'marginTop': '-2.5px'}}>
                        <span style={{ 'fontWeight': 'bold' }}>{`${props.projectContributors} Project`}</span>
                        <br />
                        {props.projectDescription}
                    </div>
                }
            />
        </Card>
    );
};

export default ProjectCard;