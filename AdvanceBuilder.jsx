import React, { useState } from 'react';

const mockAdvanceLayout = [
  {
    id: 'section-1',
    title: 'Schedule',
    fields: [
      { id: 'field-1', label: 'Venue Access Time', type: 'time', value: '' },
      { id: 'field-2', label: 'Sound Check', type: 'time', value: '' },
    ]
  },
  {
    id: 'section-2',
    title: 'Hospitality',
    fields: [
      { id: 'field-3', label: 'Catering Vendor', type: 'text', value: '' },
      { id: 'field-4', label: 'Meal Count', type: 'number', value: '' },
    ]
  }
];

export default function AdvanceBuilder() {
  const [sections, setSections] = useState(mockAdvanceLayout);

  const updateField = (sectionId, fieldId, newValue) => {
    setSections(sections.map(section =>
      section.id === sectionId
        ? {
            ...section,
            fields: section.fields.map(field =>
              field.id === fieldId ? { ...field, value: newValue } : field
            )
          }
        : section
    ));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Advance Builder</h2>
      {sections.map(section => (
        <div key={section.id} className="border p-4 my-4 bg-gray-50">
          <h3 className="font-semibold text-lg mb-2">{section.title}</h3>
          {section.fields.map(field => (
            <div key={field.id} className="mb-2">
              <label className="block text-sm mb-1">{field.label}</label>
              <input
                type={field.type}
                value={field.value}
                onChange={e => updateField(section.id, field.id, e.target.value)}
                className="border px-2 py-1 w-full"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
