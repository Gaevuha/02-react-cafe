import css from './App.module.css';
import { CafeInfo } from '../CafeInfo/CafeInfo';
import { useState } from 'react';
import { VoteOptions } from '../VoteOptions/VoteOptions';
import type { Votes, VotesType } from '../../types/votes';

export default function App() {
    
const [votes, setVotes] = useState<Votes>({
	good: 0,
	neutral: 0,
	bad: 0
}
);
    const handleVote = (type:VotesType) => {
        setVotes(value => ({
            ...value,
            [type]: value[type as keyof Votes] + 1,
        }));
    }
    
    const resetVotes = () => {
        setVotes({
            good: 0,
            neutral: 0,
            bad: 0
        });
    }
    
    return (
        <div className={css.app} >
            <CafeInfo />
            <VoteOptions
                onVote={handleVote}
                onReset={resetVotes}
                canReset={true}
            />
        </div >


    );

    
}