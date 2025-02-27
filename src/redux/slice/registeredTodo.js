import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = "https://todobackend-b8cy.onrender.com";

let currentDate = new Date();
currentDate = currentDate.toISOString().split("T")[0];

// Async thunk for fetching current day's todos
export const getCurrentDayTodos = createAsyncThunk(
  "getCurrentDayTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(baseUrl + "/todos/" + currentDate);

      if (!response.ok) {
        throw new Error("Failed to fetch current day todos");
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async Thunk for Uploading a Todo
export const uploadTodo = createAsyncThunk(
  "uploadRegisteredTodo",
  async (todo, { rejectWithValue }) => {
    try {
      const response = await fetch(baseUrl + "/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
      });

      if (!response.ok) {
        throw new Error("Failed to upload todo");
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const registeredTodoSlice = createSlice({
  name: "registeredTodo",
  initialState: {
    tasks: [
      {
        task: "Your Registered Task will be displayed like this...",
        isCompleted: true,
      },
    ],
    createdOn: currentDate,
    details: {
      status: "idle",
      isSent: false,
      apiResponse: null,
    },
  },
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push({ task: action.payload, isCompleted: false });
    },
    mergeTodo: (state, action) => {
      state.tasks = state.tasks.concat(action.payload);
    },
    checkTodo: (state, action) => {
      const task = state.tasks.find((target) => target.task === action.payload);
      if (task) task.isCompleted = true;
    },
    removeTodo: (state, action) => {
      state.tasks = state.tasks.filter((_, index) => index !== action.payload);
    },
    resetTodos: (state) => {
      return {
        tasks: [],
        createdOn: state.createdOn,
        details: { status: "idle", isSent: false, apiResponse: null },
      };
    },
  },
  extraReducers: (builder) => {
    builder
      // Cases for fetching current day's tasks
      .addCase(getCurrentDayTodos.pending, (state) => {
        console.log("Fetching todos...");
        state.details.status = "loading";
        state.tasks = [
          {
            task: "Loading...",
            isCompleted: false,
          },
        ];
      })
      .addCase(getCurrentDayTodos.fulfilled, (state, action) => {
        console.log("Fetched successfully");
        state.details.status = "succeeded";
        state.tasks =
          action.payload.length > 0
            ? action.payload[0].tasks
            : [
                {
                  task: "Your Registered Task will be displayed like this...",
                  isCompleted: true,
                },
              ];
      })
      .addCase(getCurrentDayTodos.rejected, (state, action) => {
        console.log("Fetch failed");
        state.details.status = "failed";
        state.details.error = action.payload;
      })

      // Cases for uploading a task
      .addCase(uploadTodo.pending, (state) => {
        state.details.status = "loading";
      })
      .addCase(uploadTodo.fulfilled, (state, action) => {
        console.log("Todo uploaded:", action.payload);
        state.details.status = "succeeded";
        state.details.isSent = true;
        state.details.apiResponse = action.payload;
        alert("Data Sent Successfully...");
      })
      .addCase(uploadTodo.rejected, (state, action) => {
        console.log("Upload failed");
        state.details.status = "failed";
        state.details.error = action.payload;
      });
  },
});

export const { addTodo, removeTodo, checkTodo, resetTodos, mergeTodo } =
  registeredTodoSlice.actions;
export default registeredTodoSlice.reducer;
