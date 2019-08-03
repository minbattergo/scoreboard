import React from 'react'
import axios from 'axios'

export class Heroes extends React.Component {
    render() {
        return (
            <div>
                Heroes works,
            </div>
        );
    }

    componentDidMount() {
        this.getHeroes();
        /*axios.get('http://ec2-15-164-134-124.ap-northeast-2.compute.amazonaws.com:8000/api/user/heroes')
            .then(res => console.log(res.data)); //promise 패턴 .then 으로 callback 받을수 있음*/
    }

    // async를 붙이면 Promise가 리턴
    // async는 반드시 await와 함께 사용된다.
    // await 뒤에는 Promise가 오고 결과가 올때까지 기다렸다가 결과를 리턴
    async getHeroes() {
       const res = await axios.get('http://ec2-15-164-134-124.ap-northeast-2.compute.amazonaws.com:8000/api/user/heroes') ;
       console.log('res.data [',res.data)
       // 처리로직 들어 가면 됨
    }
}