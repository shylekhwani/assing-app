import mongoose, { Schema, Document, } from 'mongoose';

export interface IHabit extends Document {
    goal: string;
    habit: string;
    habitType: string;
    period: string;
    checked: boolean;
    createdAt: Date;
    updatedAt: Date;
  }

const habitSchema = new Schema<IHabit>(
    {
    goal: {
        type : String,
        required: true
    },

    habit: {
        type : String,
        required: true
    },

    habitType: {
        type : String,
    },

    period: {
        type : String,
    },

    checked: { 
        type: Boolean, 
        default: false 
    },
    
}, { timestamps: true });

const Habit = mongoose.models.Habit || mongoose.model<IHabit>("Habit", habitSchema);

export default Habit;