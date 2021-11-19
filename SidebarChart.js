import { Avatar, List, ListItem } from '@mui/material'
import React from 'react'
import "/home/vishal/whatsapp/src/SidebarChart.css"

export default function SidebarChart() {
    return (
        <List>
        <div className="sidebar_Chart">
        <ListItem>
            <Avatar />
            <h4>Name of the messageer
            </h4>
            </ListItem>
            <div className="sidebarChart_info">
            <h4 className="messages">The message</h4>
            <hr></hr>
            </div>
        </div>
        </List>
    )
}
