import { useState } from 'react';
import { ShareAltOutlined, RightOutlined, GithubOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

type ProjectCardProps = {
    projectName: string;
    projectDescription: string;
    projectImage: string;
    projectLink: string;
    projectGithub: string;
};

const ProjectCard = (props: ProjectCardProps) => {
    const [shareButtonClicked, setShareButtonClicked] = useState(false);

    return (
        <Card
            style={{ width: 300 }}
            cover={
                <img
                    style={
                        {
                            maxHeight: '225px',
                            objectFit: 'cover',
                            objectPosition: 'top',
                        }
                    }
                    alt={props.projectName}
                    src={props.projectImage}
                />
            }
            actions={[
                <GithubOutlined key="github" onClick={() => window.open(props.projectGithub, '_blank')} />,
                <RightOutlined key="go-to-page" onClick={() => window.open(props.projectLink, '_blank')} />,
                <ShareAltOutlined key="share" style={{
                    color: shareButtonClicked ? 'lightseagreen' : '',
                    // Note that the default color is '' instead of 'black' to preserve default hover color
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
                description={props.projectDescription}
            />
        </Card>
    );
};

export default ProjectCard;