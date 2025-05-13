import { Request, Response } from 'express';
import CoachInfo from '../models/coachInfo';
// import UserInfo from '../models/userInfo';

export const getCoachByUserId = async (req: Request, res: Response) => {
    try {
        let coachIds = req.params.userId;
         const coachDetails = await CoachInfo.findOne({ userId: coachIds }).lean();

        res.status(200).json({
            success: true,
            data: coachDetails,
        });
    } catch (error: any) {
        console.error('Error fetching coaches:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};