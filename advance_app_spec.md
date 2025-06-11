**ADVANCING APP | FULL DEVELOPMENT SPEC**

---

## 1. OVERVIEW
A mobile-first and web-compatible application to manage touring event data with a focus on field-based advances, real-time updates, offline sync, and customizable templates.

---

## 2. CORE MODULES

### a. **Tour Manager**
- Create/Edit Tours
- Date Range Picker
- Day Type Selector (Show / Travel / Off)

### b. **Event Advance**
- Per-event Advance Form (created from blank or template)
- Design Mode: Build layout using predefined field library
- Advance Mode: Data entry
- Status Tracking: Not Started / In Progress / Done

### c. **Advance Templates**
- Create new templates from scratch or save from existing advances
- Organization-wide template storage
- Apply templates to future events

### d. **Field Library**
- Field Types: Choices, Number, Text (short/long), Date, Time, Checkbox
- Grouped by sections (Vehicle, Backline, Stage, Schedule, etc.)
- Managed by admins only

### e. **Venue Integration**
- Manual or database-based venue entry
- Attach tech packs (PDF upload)
- Auto-fill venue fields based on selection

### f. **Schedule Grid**
- Visual schedule for each day: call times, meals, load in/out
- Uses: ADVANCING TEMPLATE.xlsx structure

### g. **Offline Mode & Sync**
- Local caching of all data per tour/event
- Flag changes for sync when online

### h. **User Roles**
- Admin: Full access
- Manager: Edit assigned tours/events
- Crew: View-only
- Viewer: Filtered access (e.g., just call times)

### i. **Export/Share**
- Export Advance to PDF or CSV
- Email or shared link options

---

## 3. TECH STACK

### Frontend:
- React + TailwindCSS (Web)
- React Native (Mobile)
- Redux Toolkit (state)
- localForage (offline caching)

### Backend:
- Node.js + Express
- MongoDB
- Firebase Auth (or Auth0)

### Storage:
- AWS S3 (File Uploads)

### Deployment:
- Vercel / Netlify (Web)
- Expo / EAS (Mobile)

---

## 4. DATABASE STRUCTURE

### Collections:
- `users`
- `organizations`
- `tours`
- `events`
- `advances`
- `templates`
- `venues`
- `fields`

---

## 5. SAMPLE FIELD OBJECT
```json
{
  "section": "Vehicle",
  "label": "Type of Vehicles",
  "type": "Choices",
  "options": ["1 BUS", "2 BUSSES", "1 CAR", "2 CARS"],
  "notes": "Select based on tour party size."
}
```

---

## 6. API ENDPOINTS (CRUD EXAMPLES)

### Tours
- `POST /tours` – Create new tour
- `GET /tours/:id` – Fetch tour info
- `PUT /tours/:id` – Update tour info

### Events
- `POST /tours/:id/events` – Add event to tour
- `GET /events/:id` – Get event details
- `PUT /events/:id` – Edit event

### Advances
- `POST /events/:id/advances` – Add advance
- `GET /advances/:id` – Get advance
- `PUT /advances/:id` – Update advance

### Templates
- `GET /templates` – List templates
- `POST /templates` – Save new template
- `POST /advances/:id/save-as-template` – Save current advance as template

### Field Library
- `GET /fields` – Get field library
- `POST /fields` – Add field (admin only)

---

## 7. WIREFRAME SCREENS (Suggested)

- Tour Setup Wizard
- Tour Dashboard (calendar + list view)
- Event Detail + Advance tab
- Advance Form (Design Mode / Advance Mode toggle)
- Advance Template Manager
- Field Library Editor
- Daily Schedule View
- Export + Sharing Modal

---

## 8. NEXT STEPS
- Finalize wireframes
- Implement DB schema
- Build basic tour creation & advance form logic
- Add sync layer for offline mode
- Launch MVP with template import/export

---

Full field schema available in: `advance_field_schema.json`

