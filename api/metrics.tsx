import {User, getDateTrack, getDateTrackUserDate} from "./supabase"

export class Score{
    user_date_id: number
    score: number

    public constructor(
        user_date_id: number,
        score: number
    ) {
        this.user_date_id = user_date_id;
        this.score = score;
    }

}

export async function calculateBestMatch(user_id: number) {
    const dateTrack = await getDateTrack(user_id,true)
    const dateTrackUserDate = await getDateTrackUserDate(user_id,true)
    var scoreList: Score[]= []
    
    dateTrack.forEach( (date) => {
        const scoreUser = date.avg_vote
        const otherDate = dateTrackUserDate.find(x => x.user_id == date.user_date_id)
        
        if (otherDate != null && otherDate != undefined){
            if (!otherDate.is_skipped && !date.is_skipped){
                const scoreOther = otherDate.avg_vote
                const avgScore = (scoreUser+scoreOther)/2
                scoreList.push(new Score(date.user_date_id, avgScore))
            }
        }
    });
    
    return scoreList.sort((a, b) => (a.score > b.score) ? -1 : 1).slice(0, 5)
}