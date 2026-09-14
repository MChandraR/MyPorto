import { ObjectId } from "mongodb";
import clientPromise from "./mongodb";
import { Project } from "../data/projects";
import { Certification } from "../data/certifications";

const dbName = process.env.MONGODB_DB || "myporto";

// Helper to get database connection
export async function getDb() {
  const client = await clientPromise;
  return client.db(dbName);
}

// ----------------------------------------------------
// 1. PROJECTS DATABASE OPERATIONS
// ----------------------------------------------------

export async function getProjectsCollection() {
  const db = await getDb();
  return db.collection<Project>("projects");
}

export async function getProjects(): Promise<(Project & { _id: string })[]> {
  const col = await getProjectsCollection();
  const list = await col.find({}).toArray();
  return list.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));
}

export async function addProject(project: Omit<Project, "_id">): Promise<string> {
  const col = await getProjectsCollection();
  const result = await col.insertOne(project as Project);
  return result.insertedId.toString();
}

export async function updateProject(id: string, project: Partial<Project>): Promise<boolean> {
  const col = await getProjectsCollection();
  const updateData = { ...project };
  // Remove _id from update data if exists
  delete (updateData as any)._id;

  const result = await col.updateOne(
    { _id: new ObjectId(id) },
    { $set: updateData }
  );
  return result.modifiedCount > 0;
}

export async function deleteProject(id: string): Promise<boolean> {
  const col = await getProjectsCollection();
  const result = await col.deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount > 0;
}

// ----------------------------------------------------
// 2. CERTIFICATIONS DATABASE OPERATIONS
// ----------------------------------------------------

export async function getCertificationsCollection() {
  const db = await getDb();
  return db.collection<Certification>("certifications");
}

export async function getCertifications(): Promise<(Certification & { _id: string })[]> {
  const col = await getCertificationsCollection();
  const list = await col.find({}).toArray();
  return list.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));
}

export async function addCertification(cert: Omit<Certification, "_id">): Promise<string> {
  const col = await getCertificationsCollection();
  const result = await col.insertOne(cert as Certification);
  return result.insertedId.toString();
}

export async function updateCertification(id: string, cert: Partial<Certification>): Promise<boolean> {
  const col = await getCertificationsCollection();
  const updateData = { ...cert };
  delete (updateData as any)._id;

  const result = await col.updateOne(
    { _id: new ObjectId(id) },
    { $set: updateData }
  );
  return result.modifiedCount > 0;
}

export async function deleteCertification(id: string): Promise<boolean> {
  const col = await getCertificationsCollection();
  const result = await col.deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount > 0;
}

// ----------------------------------------------------
// 3. PROFILE / BIOGRAPHY DATABASE OPERATIONS
// ----------------------------------------------------

export interface ProfileBio {
  name: string;
  role: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  bioEn: string;
  bioId: string;
}

export async function getProfileCollection() {
  const db = await getDb();
  return db.collection<ProfileBio>("profile");
}

export async function getProfile(): Promise<ProfileBio | null> {
  const col = await getProfileCollection();
  return col.findOne({});
}

export async function updateProfile(profile: Partial<ProfileBio>): Promise<boolean> {
  const col = await getProfileCollection();
  // Attempt to update the single document in profile collections
  const result = await col.updateOne(
    {}, 
    { $set: profile },
    { upsert: true }
  );
  return result.modifiedCount > 0 || result.upsertedCount > 0;
}
