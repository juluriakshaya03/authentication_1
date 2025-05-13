import { Request, Response } from 'express';
import CoachInfo from '../models/coachInfo';
// import UserInfo from '../models/userInfo';

export const getCoach_Id_spl = async (req: Request, res: Response) => {
    try {
        let {coachIds, type} = req.params;
         const coachesWithType = await CoachInfo.find({
        userId: { $in: coachIds },
        specializations: type
      }).select('userId').lean();

        res.status(200).json({
            success: true,
            data: coachesWithType,
        });
    } catch (error: any) {
        console.error('Error fetching coaches:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};