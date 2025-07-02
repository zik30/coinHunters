
import React from 'react';
import styles from "./Pedestal.module.scss"
import first from '/icons/coin350.png'
import second from '/icons/coin250.png'
import third from '/icons/coin150.png'

const Pedestal = ({data}) => {

    return (
        <div>
            <div className={styles.leaderboard}>
                
                <div className={styles.leaderboardPlayers}>
                    <div className={styles.leaderboardPlayersSecond}>
                        <div className={styles.secondCircle}>
                            <img src={second} alt="2nd place coin" />
                        </div>
                        {data[1] && (
                            <>
                                <div className={styles.leaderboardPlayersHeader}>
                                    <h4>{data[1].name}</h4>
                                </div>
                                <h4>{data[1].coin}</h4>
                            </>
                        )}
                    </div>

                    <div className={styles.leaderboardPlayersFirst}>
                        <div className={styles.firstCircle}>
                            <img src={first} alt="1st place coin" />
                        </div>
                        {data[0] && (
                            <>
                                <div className={styles.leaderboardPlayersHeader}>
                                    <h4>{data[0].name}</h4>
                                </div>
                                <h4>{data[0].coin}</h4>
                            </>
                        )}
                    </div>

                    <div className={styles.leaderboardPlayersThird}>
                        <div className={styles.thirdCircle}>
                            <img src={third} alt="3rd place coin" />
                        </div>
                        {data[2] && (
                            <>
                                <div className={styles.leaderboardPlayersHeader}>
                                    <h4>{data[2].name}</h4>
                                </div>
                                <h4>{data[2].coin}</h4>
                            </>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Pedestal;
