import React, {useEffect, useState} from 'react'
import styles from './LeaderPage.module.scss'



const columns = [
    {
        title: '№',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Score',
        dataIndex: 'score',
        key: 'score',
    }
];



function Leader() {
    const MOCK_API_URL = "https://66a8b255e40d3aa6ff5902eb.mockapi.io/players";
    const [players,setPlayers]= useState([])

    const updateUser = async (name, phone,coin) => {
        try {
            const response = await fetch(`${MOCK_API_URL}`);
            const result = await response.json();
            const data = result.filter(user => user.phone === phone.toString());
            if (data.length > 0) {
                const userId = data[0].id;
                const updateResponse = await fetch(`${MOCK_API_URL}/${userId}`, {
                    method: "PUT",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({name, phone,coin})
                });

                const updateResult = await updateResponse.json();
            }
        } catch (error) {
            console.error("Ошибка при обновлении пользователя:", error);
        }
    };
    const getPlayers = async ()=>{
        try{
            const response = await fetch(`https://66a8b255e40d3aa6ff5902eb.mockapi.io/players`)
            const data = await response.json()
            setPlayers(data.sort((a, b) => b.coin - a.coin));
        }catch (e) {
            console.log(e)
        }
    }
    useEffect(()=>{
        getPlayers()
    },[updateUser])
    const coin = localStorage.getItem("coin")
    const phone = localStorage.getItem("phone");
    const name = localStorage.getItem("name");
    useEffect(()=>{
        updateUser(name,phone,coin)
    },[coin])


    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.player}>
                    <h3>Твой результат: </h3>
                    <div className={styles.playerRes}>
                        <h3></h3>
                        <h3 className={styles.name}>{name}</h3>
                        <h3>{coin}</h3>
                    </div>
                </div>
                <div className={styles.text}>
                    <h2 className={styles.title}>Leaderboard</h2>
                    <h2 className={styles.p}>Доска почета!</h2>
                </div>
                <table>
                    <thead>
                    {/* <div> */}
                    <tr>
                        {
                            columns.map((column, i) => (
                                <th key={i} className={styles.tableHeader}>
                                    {column.title}
                                </th>
                            ))
                        }
                    </tr>
                    {/* </div> */}
                    </thead>
                    <tbody>
                    {
                      players &&  players.map((player, i) => (
                            <tr key={i} className={styles.tableRow}>
                                <td>{i + 1}</td>
                                <td>{player.name}</td>
                                <td>{player.coin}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Leader