
import React from 'react';
import styles from "./Pedestal.module.scss"

const Pedestal = ({data}) => {

    return (
        <div>
            <div className={styles.leaderboard}>
                
                <div className={styles.leaderboardPlayers}>
                    <div className={styles.leaderboardPlayersSecond}>
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
