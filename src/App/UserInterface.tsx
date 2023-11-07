import { Button } from "../components/ui/button";
import React from "react";
import "./management/ClockTime/DateTime"
import {
  Select,
  SelectContent,
  SelectValue,
  SelectItem,
  SelectTrigger,
} from "../components/ui/select";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";



function UserInterface() {
  return (
    <div
      id="Content"
      className="relative overflow-hidden text-white w-full h-full"
    >
      <div className="text-7xl p-20 justify-between items-end flex w-full h-full">
        <div className="text-slate-950 font-bold flex items-center gap-4">
          <Input
            defaultValue={"jfKfPfyJRdk"}
            type="video"
            placeholder="url or video id"
            id="InputBack"
          />

          <Select>
            <SelectTrigger className="w-60">
              <SelectValue placeholder="Select type..."></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bg-url">Image Url</SelectItem>

              <SelectItem value="youtube">Youtube</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div id="clock"></div>
      </div>
    </div>
  );
}
export default UserInterface;
