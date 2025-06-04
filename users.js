const users = [
  {
    id: 1,
    username: "admin",
    password: "123",
    role: "admin",
    name: "Administrador Principal"
  },
  {
    id: 2,
    username: "user1",
    password: "456",
    role: "user",
    name: "Juan Pérez"
  }
];

const assets = [
  {
    id: 1,
    name: "Laptop Dell XPS",
    assignedTo: 2,
    lastMaintenance: "2023-05-15",
    nextMaintenance: "2023-11-15",
    status: "active"
  },
  {
    id: 2,
    name: "MacBook Pro M1",
    assignedTo: null,
    lastMaintenance: "2023-06-20",
    nextMaintenance: "2023-12-20",
    status: "available"
  },
  {
    id: 3,
    name: "Monitor LG 4K",
    assignedTo: null,
    lastMaintenance: "2023-04-10",
    nextMaintenance: "2023-10-10",
    status: "available"
  },
  {
    id: 4,
    name: "PC Workstation",
    assignedTo: null,
    lastMaintenance: "2023-03-05",
    nextMaintenance: "2023-09-05",
    status: "maintenance"
  },
  {
    id: 5,
    name: "iPad Pro",
    assignedTo: 2,
    lastMaintenance: "2023-07-01",
    nextMaintenance: "2024-01-01",
    status: "active"
  }
];

export { users, assets };