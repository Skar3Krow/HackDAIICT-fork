import mongoose from "mongoose";

// Dosage Schema
const dosageSchema = new mongoose.Schema({
    dosage: {
        type: String,
        required: true
    },
    frequency: {
        type: String,
        required: true
    }
}, { timestamps: true })

// Prescription History Schema
const prescriptionHistorySchema = new mongoose.Schema({
    medicineName: {
        type: String
    },
    dosage: [dosageSchema]
}, { timestamps: true })

// Prescription Schema
const prescriptionSchema = new mongoose.Schema({
    medicineName: {
        type: String,
        required: true
    },
    dosage: [dosageSchema]
}, { timestamps: true })

// Patient Schema
const patientSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    abdmNumber: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    prevailingIllness: {
        type: String
    },
    prescriptions: [prescriptionSchema], // Reference to prescriptions
    prescriptionHistory: [prescriptionHistorySchema] // Reference to prescription history of the patient 
}, { timestamps: true })

const Patient = mongoose.model("Patient", patientSchema);
export default Patient;
