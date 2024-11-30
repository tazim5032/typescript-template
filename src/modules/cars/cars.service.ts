import mongoose from "mongoose";
import { Car } from "./cars.interface";
import { CarModel } from "./cars.model";


const createCarIntoDB = async(car: Car) =>{
    const result = await CarModel.create(car);
    return result;
}

const getAllCarsFromDB = async () =>{
    const result = await CarModel.find();
    return result;
}

const getSingleCarFromDB = async (id: string) =>{
    const result =  await CarModel.findById({_id: new mongoose.Types.ObjectId(id)});
    return result;
}

const updateCarIntoDB = async (id: string, car: Car)=>{
    const result = await CarModel.findByIdAndUpdate({_id: new mongoose.Types.ObjectId(id)}, car, {new: true});
    return result;
}


const deleteCarFromDB = async (id: string) =>{
    const result = await CarModel.findByIdAndDelete({_id: new mongoose.Types.ObjectId(id)});
    return result;
}


export const productService = {
    createCarIntoDB,
    getAllCarsFromDB,
    getSingleCarFromDB,
    updateCarIntoDB,
    deleteCarFromDB,


}