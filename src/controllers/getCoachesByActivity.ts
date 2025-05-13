import { Request, Response } from 'express';
import CoachInfo from '../models/coachInfo';

export const getCoachesByActivity = async (req: Request, res: Response) => {
    try {
        // const activity = req.query.activity as string;
        let coachQuery: any = {};


        // Filter by specialization if provided
        // if (activity && activity !== '') {
        //     coachQuery.specializations = { $in: [activity] };
        // }

        let coaches = await CoachInfo.find(coachQuery).populate('userId').lean();
        // Get coaches based on the initial query
        // let coaches = await CoachInfo.find(coachQuery).populate('userId').lean();

        res.status(200).json({
            success: true,
            data: coaches,
        });
    } catch (error: any) {
        console.error('Error fetching coaches:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};