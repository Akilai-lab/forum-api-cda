import { disconnectToAccount, deleteMyAccount } from '../Login/FunctionsUsers.js';

import { Button } from '@mui/material';
import { Grid } from '@mui/material';

import { useNavigate } from 'react-router';
const Header = () => {
    const userId = sessionStorage.getItem('userId');
    const navigate = useNavigate();
    return(
        <div>
            <Grid container spacing={2}
            sx={{
                width: '95%;',
                justifyContent: 'center',
                margin: '5%',
                maxWidth: 'fit-content'
                }}
            >
                <Grid item xs={4}>
                    <div className="navStyles">
                        <Button
                            onClick={() => {deleteMyAccount(userId)}}
                            sx={{
                            width:'250px',
                            color:'white',
                            bgcolor: '#791616',
                            minHeight: '60px',
                            }}
                        >Supprimer son compte</Button>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className="navStyles">
                        <Button
                            onClick={() => disconnectToAccount()}
                            sx={{
                                width:'250px',
                                color:'white',
                                bgcolor: '#791616',
                                minHeight: '60px',
                                }}
                        >Se deconnecter</Button>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className="navStyles">
                        <Button
                            onClick={() => navigate('/ChildrenAid')}
                            sx={{
                            width:'250px',
                            color:'white',
                            minHeight: '60px',
                            bgcolor:'#791616'
                            }}
                        >Go to Children Forum</Button>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className="navStyles">
                        <Button
                            onClick={() => navigate('/PyschologicalDistress')}
                            sx={{
                            width:'250px',
                            color:'white',
                            minHeight: '60px',
                            bgcolor:'#791616'
                            }}
                        >Go to Psychologic Distress Forum</Button>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className="navStyles">
                        <Button
                            onClick={() => navigate('/RedirectContactProabout')}
                            sx={{
                            width:'250px',
                            color:'white',
                            minHeight: '60px',
                            bgcolor:'#791616',
                            }}
                        >Go to Redirect Contact Pro</Button>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className="navStyles">
                        <Button
                            onClick={() => navigate('/Aides')}
                            sx={{
                            width:'250px',
                            color:'white',
                            minHeight: '60px',
                            bgcolor:'#791616',
                            }}
                        >Go to Gouvernementales Aides</Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export default Header;