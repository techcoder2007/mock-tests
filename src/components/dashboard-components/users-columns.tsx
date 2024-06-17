"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "@radix-ui/react-checkbox";
import { toast } from "react-hot-toast";

import {
  updateUserIsPaidStatus,
  deleteDocumentField,
} from "@/server-actions/actions";

// This type is used to define the shape of our data. e.g we want our id to be string and status none other than these four options
export type Users = {
  id: string;
  isPaid: boolean;
  password: string;
  appId: string;
  email: string;
};

export const columns: ColumnDef<Users>[] = [
  {
    id: "selected",
    header: ({ table }) => {
      return (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      );
    },
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "password",
    header: () => (
      <Button variant="outline" className="font-bold">
        Password
      </Button>
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("password")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="outline"
          className="font-bold"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "isPaid",
    header: () => <div className="text-right font-bold">Status</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-bold">
          {String(row.getValue("isPaid"))}
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const handleUpdataIsPaid = async () => {
        await updateUserIsPaidStatus(row.original).then((document) => {
          return document;
        });
        toast.success("Paid is updated successfully");
      };

      const handleDeleteUser = async () => {
        await deleteDocumentField("users", row.original.id).then(() => {
          toast.success("Delete was successful");
        });
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel className="font-bold">Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => handleUpdataIsPaid()}
              className="font-bold"
            >
              Update User status
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleDeleteUser} className="font-bold">
              Delete User
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
