"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Star } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

type Props = {
  app: { 
    collegeName: string,
    candidateName:string,
    profileImageURL:string
};
};

export default function AddReview({ app }: Props) {
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Review submitted:", {
      rating,
      description,
      college: app.collegeName,
      name:app.candidateName,
      profileImageURL:app.profileImageURL

    });
    // TODO: Call backend API
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="my-2" variant={"gradientOutline"}>
            <Star className="mr-2 h-4 w-4" /> Add Review
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Review for {app.collegeName}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="rating">Rating (1–5)</Label>
              <Select
                onValueChange={(value) => setRating(Number(value))}
                defaultValue={rating.toString()}
              >
                <SelectTrigger id="rating" className="mt-1">
                  <SelectValue placeholder="Select a rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="description">Review Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Write your review here..."
                className="mt-1"
              />
            </div>
            <Button type="submit">Submit Review</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}