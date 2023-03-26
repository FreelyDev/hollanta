import './gallery.scss'
import { useEffect, useRef, useState } from "react";
import useDraggableScroll from 'use-draggable-scroll';
import LoaderIndicator from 'components/Loader';
import { useWeb3React } from '@web3-react/core';

type GalleryProps = {
    nfts: string[]
    isStaked ?:boolean
    selectedIds: string[]
    label?: string
    onSelectAll(nftIds: string[]): void
    onSelect(nftIds: string[]): void
    onDeselect(nftIds: string[]): void
    onUnstake ?:any
    onStake ?:any
    selectedCount ?:number
};

export default function Gallery({ nfts, selectedIds, isStaked, onStake, onSelect, onDeselect, onUnstake, selectedCount, onSelectAll }: GalleryProps): JSX.Element {
    const ref = useRef(null);
    const { onMouseDown } = useDraggableScroll(ref, { direction: 'horizontal' });
    const [allImgLoaded, setAllImgLoaded] = useState(false)
    const isAllSelected = nfts.length > 0 && nfts.filter((nft) => selectedIds.indexOf(nft) === -1).length === 0


    useEffect(() => {
        setTimeout(() => {
            setAllImgLoaded(true)
        }, 3000);

    }, []);

    const handleClick = (isSelected, nftId: string) => {
        if (isSelected) {
            onDeselect([nftId])
        } else {
            onSelect([nftId])
        }
    }

    const handleAllClick = () => {
        if (isAllSelected) {
            onDeselect(nfts)
        } else {
            onSelectAll(nfts)
        }
    }
    const [loginStatus, setLoginStatus] = useState(false);
    const { connector, library, chainId, account, active } = useWeb3React();

    useEffect(() => {
        const isLoggedin = account && active && chainId === parseInt(process.env.REACT_APP_NETWORK_ID, 10);
        setLoginStatus(isLoggedin);
    }, [connector, library, account, active, chainId]);

    return (
        <div className="gallery">
            <div className="top">
                <p>{`${nfts?.length || 0} NFTS ${isStaked ? `STAKED IN POOL` : 'IN YOUR WALLET'}`}</p>
                <div className="row">
                <button
                    disabled={!isAllSelected && nfts.length === 0}
                    onClick={handleAllClick}
                    className = 'selectBtn'
                >{!isAllSelected ? 'Select All' : 'UnSelect All'}</button>

                {isStaked ?
                    <button
                        disabled={selectedCount === 0 || !loginStatus}
                        onClick={onUnstake}
                        className = 'stakeBtn'
                    >{`Unstake ${selectedCount}`}</button>:
                    <button
                        disabled={selectedCount === 0 || !loginStatus}
                        onClick={onStake}
                        className = 'stakeBtn'
                    >{`Stake ${selectedCount}`}</button>
                }   
                </div>

            </div>

            <div className="imgContent">
                {nfts.length === 0?
                    <div className="noNFT">
                        <p>No NFTs</p>
                    </div>
                    :
                    <div className={!allImgLoaded ? "img_loader" : "img_loader imgDone"}>
                        <LoaderIndicator />
                    </div>
                }

                <div className={!allImgLoaded ? "slideView" : "slideView done"} onMouseDown={onMouseDown} ref={ref}>
                    <div className="slideList">
                        {nfts.map((nft) => {
                            const isSelected = selectedIds.indexOf(nft) > -1;
                            // const imgUrl = `/assets/imgs/staking/0${nft}.png`
                            const imgUrl = `https://gateway.ipfs.io/ipfs/QmX6JfgjGQXBGmfQP3ADKYsVjBgwkcM2vKw3o3wMkmv1if/${nft.padStart(4,"0")}.png`
                            return <div className={isSelected ? "sideImg selected" : "sideImg"}
                                onClick={() => { handleClick(isSelected, nft) }}
                                key={`nft${nft}`}
                            >
                                <div className="imgContainer">
                                    <img src={imgUrl} alt="" />
                                    <p className="tokenID"># {nft}</p>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}

