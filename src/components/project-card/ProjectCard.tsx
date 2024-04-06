import { useState } from 'react';
import { ShareAltOutlined, RightOutlined, GithubOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Card, Tooltip } from 'antd';
import FigmaIcon from '../../components/figma-icon/FigmaIcon';

const { Meta } = Card;

type ProjectCardProps = {
    projectName: string;
    projectDescription: string;
    projectContributors: ContributorTypes;
    projectImage: string;
    projectLink: string;
    projectGithub: string | undefined;
    projectFigma: string | undefined;
    projectTechStack: string[] | undefined;
    deployed: boolean;
};
type ContributorTypes = 'Individual' | 'Team' | 'Professional';

const ProjectCard = (props: ProjectCardProps) => {
    const [shareButtonClicked, setShareButtonClicked] = useState(false);

    return (
        <Card
            style={{
                width: 300,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.01)';
                e.currentTarget.style.transition = 'transform 0.15s ease-out';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
            }}
            cover={
                props.deployed ? (
                    <img
                        style={{
                            height: '225px',
                            objectFit: 'cover',
                            objectPosition: 'top',
                            position: 'relative',
                            top: '7.65px',
                            width: '95%',
                            margin: 'auto',
                        }}
                        alt={props.projectName}
                        src={props.projectImage}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.cursor = 'pointer';
                        }}
                        onClick={() => window.open(props.projectLink, '_blank')}
                    />
                ) : (
                    <Tooltip title="Deployment currently unavailable" placement="bottom" mouseEnterDelay={0} mouseLeaveDelay={0}>
                        <img
                            style={{
                                height: '225px',
                                objectFit: 'cover',
                                objectPosition: 'top',
                                position: 'relative',
                                top: '7.65px',
                                width: '95%',
                                margin: 'auto',
                            }}
                            alt={props.projectName}
                            src={props.projectImage}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.cursor = 'not-allowed';
                            }}
                        />
                    </Tooltip>
                )
            }
            actions={[
                props.projectFigma ? (
                    <FigmaIcon
                        key="figma"
                        onClick={() => window.open(props.projectFigma, '_blank')}
                    />
                ) : (
                    <GithubOutlined
                        key="github"
                        style={{
                            color: props.projectGithub ? '' : 'lightgray',
                            // Note that the default color is '' instead of 'black' to preserve default hover color
                            cursor: props.projectGithub ? 'pointer' : 'default',
                        }}
                        onClick={() =>
                            props.projectGithub && window.open(props.projectGithub, '_blank') // Ensure that the link exists before opening it
                        }
                    />
                ),
                props.deployed ? (
                    <RightOutlined key="go-to-page" onClick={() => window.open(props.projectLink, '_blank')} />
                ) : (
                    <Tooltip title="Deployment currently unavailable" placement="top" autoAdjustOverflow mouseEnterDelay={0}>
                        <ExclamationCircleOutlined key="not-deployed" style={{ color: 'red', cursor: 'not-allowed' }} />
                    </Tooltip>
                ),
                <ShareAltOutlined
                    key="share"
                    style={{
                        color: shareButtonClicked ? 'lightseagreen' : '',
                    }}
                    onClick={() => {
                        navigator.clipboard.writeText(props.projectLink);
                        setShareButtonClicked(true);
                        setTimeout(() => {
                            setShareButtonClicked(false);
                        }, 1000);
                    }
                    }
                />,
            ]}
        >
            <Meta
                title={props.projectName}
                description={
                    <div style={{ 'marginTop': '-2.5px' }}>
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