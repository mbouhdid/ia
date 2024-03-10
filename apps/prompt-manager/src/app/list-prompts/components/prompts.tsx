'use client'
import * as React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import { listItemButtonClasses } from '@mui/joy/ListItemButton';
import { ListItemButton } from "@mui/material";
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import { DocumentScannerRounded } from '@mui/icons-material';
import { Prompt, PromptView } from '../../lib/definitions/definitions';
import Link from 'next/link';

export default function Prompts({ list }: { list: PromptView[] }) {
    return (
        <List
            sx={{
                [`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]: {
                    borderLeft: '4px solid',
                    borderLeftColor: 'var(--joy-palette-primary-outlinedBorder)',
                },
            }}
        >
            {list.map((item, index) => (
                <React.Fragment key={index}>
                    <ListItem sx={{ p: 0 }}>
                        <ListItemButton
                            {...(index === 0 && {
                                selected: true,
                                color: 'neutral',
                            })}
                            sx={{ p: 2 }}
                            LinkComponent={Link} href={item.link}
                        >
                            <ListItemDecorator sx={{ alignSelf: 'flex-start' }}>
                                <DocumentScannerRounded />
                            </ListItemDecorator>
                            <Box sx={{ pl: 2, width: '100%' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        mb: 0.5,
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                        <Typography level="title-sm" sx={{ mb: 0.5 }}>
                                            {item.name}
                                        </Typography>
                                    </Box>
                                    <Typography level="body-xs" textColor="text.tertiary">
                                        21/04/2024
                                    </Typography>
                                </Box>
                                <Typography level="body-sm">{`${item.template?.slice(0, 80)}...`}</Typography>
                            </Box>
                        </ListItemButton>
                    </ListItem>
                    <ListDivider sx={{ m: 0 }} />
                </React.Fragment>
            ))}
        </List>
    );
}