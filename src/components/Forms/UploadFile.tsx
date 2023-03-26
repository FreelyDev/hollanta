import React, { forwardRef, Ref, useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import clsx from 'clsx';
import { toast } from 'react-toastify';

interface FileInputProps {
  info?: string;
  label?: string;
  fileName ?:string;
  fileSize ?:string;
  dispalyAsset?: boolean;
  defaultAsset?: string;
  defaultAssetType?: string;
  onChange?: Function;
  accept?: 'Image' | 'Video' | 'Audio' | 'All';
}

interface PT {
  fileAssetType: string;
}

const useStyles = makeStyles<Theme, PT>(theme => ({
  root: {},

  dropzone: {
    border: '1px solid #222',
    height: props => (props.fileAssetType === 'Video' ? 'auto' : 140),
    width: '100%',
    background: '#ffffffff00',
    borderRadius: 10,
    margin: 'auto',
    position: 'relative',
    textAlign: 'center',
    display : 'flex',
    alignItems : 'center',
    [theme.breakpoints.down('xs')]: {
      height: props => (props.fileAssetType === 'Video' ? 'auto' : 100),
    },
    '&:hover': {
      '& $fileButton': {
        opacity: 1,
      },
    },
    
    '& span': {
      width: 'calc(100% - 140px)',
      maxWidth : 210,
      display : 'flex',
      flexDirection: 'column',
      '& h5': {
        width: '100%',
        color: '#636569',
        fontWeight: 400,
        overflow: 'hidden',
        whiteSpace :'nowrap',
        textAlign: 'left',
      },
    },
    
  },
  icon: {
    color: '#fff',
    marginLeft: 0,
  },
  fileOverlay: {
    position: 'absolute',
    width: '100%',
    margin: 0,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 1,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '& h4': {
      color: '#aaa',
      fontWeight: 400,
      textAlign: 'center',
    },
    '& h5': {
      color: '#aaa',
      fontWeight: 400,
      textAlign: 'left',
    },
    
  },
  fileButton: {
    backgroundColor: '#F7F9FA00',
    padding: '12px 21px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 10,
    opacity: 0.3,
    '&:active': {
      transform: 'scale(0.9)',
    },
  },
  input: {
    display: 'none',
  },
  img: {
    width: '100%',
    height: '100%',
    zIndex : 1,
    objectFit: 'cover',
    borderRadius: '10px',
    opacity: 1,
    // margin : 10,
  },
  [theme.breakpoints.down('xs')]: {
    width: 100,
    height: 100,
  },
}));

const UploadFile = forwardRef<Ref<any>, FileInputProps>(
  (
    {
      info = 'Click to Upload or Drag and Drop',
      accept = 'All',
      fileName,
      fileSize,
      label,
      dispalyAsset,
      defaultAsset,
      defaultAssetType,
      onChange,
    },
    ref,
  ) => {
    const [fileAsset, setFileAsset] = useState<string>(defaultAsset);
    const [fileAssetType, setFileAssetType] = useState<string>(defaultAssetType);
    //console.log(fileAssetType, fileAsset);
    const classes = useStyles({ fileAssetType });

    useEffect(() => {
      setFileAsset(defaultAsset);
      setFileAssetType(defaultAssetType);
    }, [defaultAsset, defaultAssetType]);

    function getExtension(filename) {
      var parts = filename.split('.');
      return parts[parts.length - 1];
    }

    function getAssetType(filename) {
      var ext = getExtension(filename);
      switch (ext.toLowerCase()) {
        case 'jpg':
        case 'jpeg':
        case 'gif':
        case 'bmp':
        case 'png':
          return 'Image';
        case 'm4v':
        case 'avi':
        case 'mpg':
        case 'mp4':
          return 'Video';
        case 'mp3':
          return 'Audio';
      }
      return '';
    }

    function getAcceptType(accept) {
      switch (accept) {
        case 'Image':
          return 'image/*';
        case 'Video':
          return 'video/*';
        case 'Audio':
          return 'audio/*';
        case 'All':
          return 'image/*, audio/*, video/*';
      }
      return '';
    }

    const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files[0].size > 2 * 1024 * 1024){
        toast.error("File Size is too big!");
        return;
      }
      onChange && onChange(e);
      e.target.files.length > 0 && setFileAsset(URL.createObjectURL(e.target.files[0]));
      e.target.files.length > 0 && setFileAssetType(getAssetType(e.target.files[0].name));
    };
    

    return (
      <div className={`${classes.dropzone} dropzone`}>
        <div className={classes.fileOverlay}>
          <label className={clsx(classes.fileButton)}>
            <CloudUploadIcon className={classes.icon} />
            <input className={classes.input} type="file" accept={getAcceptType(accept)} onChange={onChangeFile} />
          </label>

          {/* { !fileAsset && <h4>{info}</h4>}
          { !fileAsset && <h5>PNG, JPG or GIF Max 20MB</h5>} */}
        </div>
        {fileAsset && dispalyAsset && fileAssetType === 'Image' && (
          <img className={classes.img} src={fileAsset} alt="" />
        )}
        {fileAsset && dispalyAsset && fileAssetType === 'Video' && (
          <>
            <video className={classes.img} controls>
              <source src={fileAsset} type="video/mp4" />
            </video>
          </>
        )}
        {fileAsset && dispalyAsset && fileAssetType === 'Audio' && (
          <audio className={classes.img} src={fileAsset} controls />
        )}
        {/* <span>
          <h5>{fileName || ""}</h5>
          {fileSize && <h5>{(parseFloat(fileSize)/1000) || ""} KB</h5>}
        </span> */}
      </div>
    );
  },
);
export default UploadFile;
