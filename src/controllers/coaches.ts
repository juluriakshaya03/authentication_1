import { Request, Response } from 'express';
import CoachInfo from '../models/coachInfo';

export const getCoach = async (req: Request, res: Response) => {
    try {
        const coaches = await CoachInfo.find().populate('userId');


        res.status(200).json({
            success: true,
            data: coaches,
        });
    } catch (error: any) {
        console.error('Error fetching coaches:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};