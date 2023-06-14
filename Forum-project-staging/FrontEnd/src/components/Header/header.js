import { disconnectToAccount, deleteMyAccount } from '../Login/FunctionsUsers.js';

import { Button } from '@mui/material';
import { Grid } from '@mui/material';

import { useNavigate } from 'react-router';
const Header = () => {
    const userId = sessionStorage.getItem('userId');
    const navigate = useNavigate();
    return(
        <Grid container spacing={2}
            sx={{
                width: '95%;',
                justifyContent: 'center',
                margin: '5%',
                maxWidth: 'fit-content',
                flexDirection:'column',
                flexWrap:'wrap'
                }}
            > 
            <Grid>
                <Grid item xs={4}>
                    <div className="navStyles">
                        <Button
                            onClick={() => {deleteMyAccount(userId)}}
                            sx={{
                            width:'250px',
                            color:'#b1590e',
                            fontWeight:'600',
                            bgcolor: 'white',
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
                                color:'#b1590e',
                                fontWeight:'600',
                                bgcolor: 'white',
                                }}
                        >Se deconnecter</Button>
                    </div>
                </Grid>
            </Grid>
            <Grid sx={{
                marginTop:'50px'
                }}>
                <Grid item xs={4}>
                    <div className="navStyles">
                        <Button
                            onClick={() => navigate('/WomenSupport')} // à modifier forum femmes
                            sx={{
                            width:'250px',
                            color:'#b1590e',
                            fontWeight:'600',
                            minHeight: '60px',
                            bgcolor:'white'
                            }}
                        >Go to Women Forum</Button>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className="navStyles">
                        <Button
                            onClick={() => navigate('/SelfHelpChildren')}
                            sx={{
                            width:'250px',
                            color:'#b1590e',
                            fontWeight:'600',
                            minHeight: '60px',
                            bgcolor:'white'
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
                            color:'#b1590e',
                            fontWeight:'600',
                            minHeight: '60px',
                            bgcolor:'white'
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
                            color:'#b1590e',
                            fontWeight:'600',
                            minHeight: '60px',
                            bgcolor:'white',
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
                            color:'#b1590e',
                            fontWeight:'600',
                            minHeight: '60px',
                            bgcolor:'white',
                            }}
                        >Go to Gouvernementales Aides</Button>
                    </div>
                </Grid>
            </Grid>
         </Grid>
    )
}
export default Header;