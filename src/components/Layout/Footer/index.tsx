import { makeStyles } from '@material-ui/core/styles';
import FilledButton from 'components/Buttons/FilledButton';
import MultiLanguageContext from 'context/MultiLanguageContext';
import { useContext, useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(5),
    background : '#181818',
    width : '100%',
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    textAlign : 'center',
    [theme.breakpoints.down('xs')]: {
      marginTop : 50,
    },
  },
  content :{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '90%',
    maxWidth : 560,
    margin : 'auto',
    '& .row':{
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop : 35,
      paddingBottom : 35,
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        paddingTop : 24,
        paddingBottom : 24,
      },

      
    },

    '& .col':{
      display: 'flex',
      flexDirection: 'column',
      paddingBottom : 40,
      width: '100%',
      '& h3':{
        color : '#fff',
        fontSize : 20,
        fontWeight : 300,
        marginBottom : 50,
      },
      '& h4':{
        color : '#fff',
        fontSize : 14,
        fontWeight : 600,
        width : 'fit-content',
        marginBottom : 10,
      },
      '& a':{
        color : '#ddd',
        fontSize : 12,
        width : 'fit-content',
        marginBottom : 10,
        transition : 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        '&:hover':{
          color : '#fde995',
        },
        '& img':{
          marginRight : 10,
        }
      },
      '& p':{
        color : '#ddd',
        fontSize : 12,
      },
      '& .links':{
        display: 'flex',
        alignItems: 'center',
        justifyContent : 'center',
        marginBottom : 14,
        gridArea : 'auto',
        gap : 10,
        [theme.breakpoints.down('xs')]: {
          gap : 20,
          marginTop : 24,
        },
        '& a':{
          width : 24,
          height : 24,
          color : '#000',
          borderRadius : 24,
          background : '#777',
          transition : 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent : 'center',
          '&:hover':{
            background : '#aaa',
            color : '#000',
          }
        },
      },
    },
    
   
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <div className={classes.content}>

        <div className="row">
          <div className="col" style={{padding : 0}}>
            <h4>Home</h4>
            <HashLink to="/staking">Dashboard</HashLink>
            <HashLink to="/">Voting</HashLink>
            <HashLink to="/">Market</HashLink>
            <HashLink to="/">Wallet</HashLink>
            <HashLink to="/">Contact</HashLink>
          </div>

          <div className="col" style={{padding : 0}}>
            <h4>Help</h4>
            <HashLink to="/">FAQs</HashLink>
            <HashLink to="/">Terms & Conditions</HashLink>
            <HashLink to="/">Policy</HashLink>
          </div>

          <div className="col" style={{padding : 0}}>
            <h4>Help</h4>
            <HashLink to="/">FAQs</HashLink>
            <HashLink to="/">Terms & Conditions</HashLink>
            <HashLink to="/">Policy</HashLink>
          </div>
          <div className="col" style={{padding : 0}}>
            <h4>Help</h4>
            <HashLink to="/">FAQs</HashLink>
            <HashLink to="/">Terms & Conditions</HashLink>
            <HashLink to="/">Policy</HashLink>
          </div>
        </div>
        <div className="col">
          <div className="links">
            <a href="/" target={'_blank'} rel='noreferrer' className=''><i className="fas fa-phone"></i></a>
            <a href="/" target={'_blank'} rel='noreferrer' className=''><i className="fab fa-discord"></i></a>
            <a href="/" target={'_blank'} rel='noreferrer' className=''><i className="fab fa-telegram-plane"></i></a>
            <a href="/" target={'_blank'} rel='noreferrer' className=''><i className="fab fa-tiktok"></i></a>
          </div>
          <p>Copyright Ⓒ 2023 Hollanta</p>
          <p>Cookies · Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
