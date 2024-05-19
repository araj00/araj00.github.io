import React from 'react';
import { Box } from "@mui/material";

function EmojiBullet(props) {
    const { emoji, text } = props;
    const handleEmailClick = () => {
        if (emoji === '📧') { // Check for emoji equality
            window.location.href = `mailto:${text}`; // Use window.location.href
        }
    };

    return (
        <div>
            {
                emoji === "📧"
                    ?
                    <Box
                        component={'li'}
                        fontSize={'1rem'}
                        lineHeight={1.5}
                        style={{ cursor: 'pointer' }}
                        onClick={handleEmailClick}
                    >
                        <Box component={'span'} aria-label="cheese"
                            role="img"
                            mr={{ xs: '0.5rem', md: '1rem' }} fontSize={'1.5rem'}>{emoji}</Box> {text}
                    </Box>

                    :
                    <Box component={'li'} fontSize={'1rem'} lineHeight={1.5} style={{ cursor: 'default' }}>
                        <Box component={'span'} aria-label="cheese"
                            role="img"
                            mr={{ xs: '0.5rem', md: '1rem' }} fontSize={'1.5rem'}>{emoji}</Box> {text}
                    </Box>
            }
        </div>
    );
}

export default EmojiBullet;