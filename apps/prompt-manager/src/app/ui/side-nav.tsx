import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer, Toolbar, Typography, styled } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import theme from "../../../theme";

import React from "react";
import Link from "next/link";

const drawerWidth = 240;

const links = [
    {
        name: 'List prompts',
        href: '/list-prompts'
    },
];


export default function SideNav() {

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar>
                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                    Raglab
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                {links.map((link, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton LinkComponent={Link} href={link.href}>
                            {link.name}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}