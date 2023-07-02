# Kanban Board

This project is a Kanban Board, a visual tool that helps teams manage and track their work efficiently. It provides a way to visualize tasks, organize them into different stages, and track their progress from start to completion. The Kanban Board aims to replicate the functionality and user experience of popular Kanban board tools while offering an open-source alternative.

## Features

- **Board Creation**: Users can create multiple boards to organize different projects or workflows. Each board represents a separate workspace for managing tasks.

- **Task Management**: Users can create, edit, and delete tasks on the board. Tasks can be moved between different stages, such as "To Do," "In Progress," and "Done," to reflect their current status.

- **Drag-and-Drop Interface**: Tasks can be easily moved across different stages using a drag-and-drop interface, providing a seamless and intuitive user experience.

- **Task Details**: Users can add additional details to tasks, such as descriptions, due dates, labels, and assignees. This allows for better task organization and provides more context to team members.

- **User Collaboration**: Multiple users can collaborate on the same board simultaneously, allowing for real-time updates and seamless teamwork.

- **Board Sharing**: Boards can be shared with team members or stakeholders, enabling collaboration and visibility across the organization.

- **Activity Log**: The application maintains an activity log that records changes made to tasks and the board. This helps in tracking the history of task modifications and provides transparency.

## Data Structure

The Kanban Board utilizes the following data structure to manage its functionality:

- **Board**: Represents a Kanban board and contains metadata such as the board name, description, and associated tasks.

- **Task**: Represents a task on the board. It includes properties such as the task title, description, assigned user, due date, labels, and current status/stage.


- **Activity Log**: Stores a log of activities and changes made to tasks and the board. It includes information such as the user who performed the action, the timestamp, and details of the change.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **External Library**: Recoil , MUI , UUID

- **Deployment**: Netlify (for example)

## Installation

1. Clone the repository: `https://github.com/adietyaprogithub/kanban/edit/complete/`
2. Navigate to the project directory: `cd Kanban `
3. Install the dependencies: `npm install`
4. Set up the required environment variables. You can either create a `.env` file and define the variables or set them directly in your system environment.
5. Start the server: `npm start`
6. Access the application in your browser at `http://localhost:3000`
