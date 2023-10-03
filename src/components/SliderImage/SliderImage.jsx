import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmailIcon from '@mui/icons-material/Email';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import FolderIcon from '@mui/icons-material/Folder';
import MenuIcon from '@mui/icons-material/Menu';
function SliderImage() {
    const data = [
        {
            icon: <HomeIcon />,
            name: "Home"
        },
        {
            icon: <TrendingUpIcon />,
            name: "Forecast"
        },
        {
            icon: <AccountBoxIcon />,
            name: "Vendors"
        },
        {
            icon: <EmailIcon />,
            name: "Messages"
        },
        {
            icon: <WorkspacesIcon />,
            name: "Catagories"
        },
        {
            icon: <FolderIcon />,
            name: "Folders"
        }
    ]
    // console.log(data);

    const [open, setOpen] = useState(false)

    const [sel, setSel] = useState('')


    return (
        <>

            <div id='close' style={{ height: "100vh", width: "15%", boxSizing: "border-box", backgroundColor: "#5321CA", position: "relative", color: "white" }}>
                {/* <div style={{ position: "absolute", right: "12px" }}>
                    <MenuIcon onClick={() => setOpen(true)} />
                </div> */}

                <div>
                    <div>
                        <img src="../" alt="" />
                    </div>
                </div>

                {
                    data?.map((item, index) => (

                        <div onClick={() => setSel(item.name)} style={{
                            display: "flex",
                            alignItems: 'center', gap: "5px",
                            color: "white",
                            padding: "0 15px",
                            cursor: "pointer",
                            background: sel == item.name ? '#FFD700' : ''
                        }} key={index}>
                            <div>
                                {item.icon}
                            </div>
                            <div>
                                <h3>{item.name}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default SliderImage