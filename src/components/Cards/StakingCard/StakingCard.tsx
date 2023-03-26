import Gallery from 'components/gallery';
import LoaderIndicator from 'components/Loader';
import { useStyles } from './style';

type PropsType = {
    nfts?: string[]

    nfts_staked?: string[]

    isStaked?: boolean
    dataLoaded?: boolean
    OnStake?: any
    OnUnStake?: any

    selectdNftIds?: string[]
    setSelectedNftIds?: (id: string[]) => void
    
    selectdNftIds_Staked?: string[]
    setSelectedNftIds_Staked?: (id: string[]) => void

};

export default function StakingCard(
    { 
        nfts, 
        nfts_staked, 

        isStaked, 
        dataLoaded, 
        OnStake, 
        OnUnStake, 

        selectdNftIds, 
        setSelectedNftIds,

        selectdNftIds_Staked, 
        setSelectedNftIds_Staked,

    }: PropsType) {
    const classes = useStyles();

    const handleSelect = (nftIds) => {
        console.log(nftIds)
        setSelectedNftIds(selectdNftIds.concat(nftIds))
    }

    const handleDeselect = (nftIds) => {
        setSelectedNftIds(selectdNftIds.filter((nftId) => nftIds.indexOf(nftId) === -1))
    }

    const handleSelectAll = (nftIds) => {
        setSelectedNftIds(nftIds)
    }


    const handleSelect_Staked = (nftIds) => {
        setSelectedNftIds_Staked(selectdNftIds_Staked.concat(nftIds))
    }

    const handleSelectAll_Staked = (nftIds) => {
        setSelectedNftIds_Staked(nftIds)
    }

    const handleDeselect_Staked = (nftIds) => {
        setSelectedNftIds_Staked(selectdNftIds_Staked.filter((nftId) => nftIds.indexOf(nftId) === -1))
    }

    const handleStake = () => {
        if(isStaked){
            OnUnStake()
            handleSelect_Staked(selectdNftIds_Staked)
        }
        else{
            OnStake()
            handleDeselect(selectdNftIds)
        }
    }

    return (
        <>
            <div className={classes.item} data-aos="fade-right">

                <div className="itemHeader">
                    <h3>{`${isStaked ? `STAKED NFTs` : `HOLDING NFTs`}`}</h3>
                </div>
               
                {dataLoaded ?
                    <>
                        {isStaked ?
                        <>
                            <div className="itemContent">
                                <div className="nftViews">
                                    <Gallery
                                        nfts={nfts_staked || []}
                                        isStaked
                                        selectedIds={selectdNftIds_Staked}
                                        onSelect={(nftIds) => handleSelect_Staked(nftIds)}
                                        onSelectAll = {handleSelectAll_Staked}
                                        onDeselect={(nftIds) => handleDeselect_Staked(nftIds)}
                                        onUnstake = {handleStake}
                                        selectedCount = {selectdNftIds_Staked.length || 0}
                                    />
                                </div>
                            </div>
                        </>:
                        <>
                            <div className="itemContent">
                                <div className="nftViews">
                                    <Gallery
                                        nfts={nfts || []}
                                        selectedIds={selectdNftIds}
                                        onSelect={(nftIds) => handleSelect(nftIds)}
                                        onSelectAll = {handleSelectAll}
                                        selectedCount = {selectdNftIds.length || 0}
                                        onDeselect={(nftIds) => handleDeselect(nftIds)}
                                        onStake = {handleStake}
                                    />
                                    
                                </div>
                            </div>
                        </>
                        }
                    </> :
                    <div className="loadingPart">
                        <LoaderIndicator />
                        <h3>Loading Data</h3>
                    </div>
                }
            </div>
        </>
    )
}
