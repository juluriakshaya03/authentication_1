import { Request, Response } from 'express';
// import CoachInfo from '../models/coachInfo';
import UserInfo from '../models/userInfo';

export const getUser = async (req: Request, res: Response) => {
    try {
        let userQuery: any = req.params.userQuery;
        const coaches = await UserInfo.find(userQuery)
      .select('_id firstName lastName email profileImage')
      .lean();


        res.status(200).json({
            success: true,
            data: coaches,
        });
    } catch (error: any) {
        console.error('Error fetching coaches:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};