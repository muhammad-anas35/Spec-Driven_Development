
import { promises as fs } from 'fs';
import path from 'path';

const contentFilePath = path.join(process.cwd(), 'data', 'content.json');

export async function GET() {
  try {
    const fileContent = await fs.readFile(contentFilePath, 'utf8');
    const content = JSON.parse(fileContent);
    return new Response(JSON.stringify(content), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to read content' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function POST(request) {
  try {
    const newData = await request.json();
    await fs.writeFile(contentFilePath, JSON.stringify(newData, null, 2));
    return new Response(JSON.stringify({ message: 'Content updated successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to update content' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
