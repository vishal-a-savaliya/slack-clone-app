import React, {useEffect, useState}  from 'react'
import "./Sidebar.css";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";

import SidebarOption from "./SidebarOption";

import InsertCommentIcon from '@material-ui/icons/InsertCommentOutlined';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorderOutlined';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcons from '@material-ui/icons/AppsOutlined';
import ExpandLessIcon from '@material-ui/icons/ExpandLessOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreOutlined';
import AddIcon from '@material-ui/icons/Add';

import db from '../Firebase';

function Sidebar() {

    const [channels, setChannels] = useState([]);

    useEffect(()=>{
            // this runs when the sidebar component loads as well as when the variables provided in [] is changed 
            // [] means its run once

            db.collection('rooms').onSnapshot( (snapshot) => 
                setChannels(
                    snapshot.docs.map((doc)=> ({
                        id:doc.id,
                        name: doc.data().name,
                    }))
            ))
    }, []);


    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">

                    <h2>vs apps</h2>
                    <h3>
                        <FiberManualRecordIcon />
                     vs leitan
                    </h3>
                </div> 
                <CreateIcon />
            </div>
            
            <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions"/>
            <SidebarOption Icon={DraftsIcon} title="Saved items"/>
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser"/>
            <SidebarOption Icon={PeopleAltIcon} title="People & User groups"/>
            <SidebarOption Icon={AppsIcons} title="Apps"/>
            <SidebarOption Icon={FileCopyIcon} title="File browser" />
            <SidebarOption Icon={ExpandLessIcon} title="Show Less" />
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr />
            <SidebarOption Icon={AddIcon} title="Add channels"/>

            {channels.map(channel => (
                <SidebarOption title = {channel.name} id={channel.id} />
            ))}
            
        </div>
    )
}

export default Sidebar
