import { test, expect, type Page } from '@playwright/test';

const baseURL = 'https://petstore3.swagger.io/api/v3';

test.describe('Pet API testing', () => {

    test('Find pet by ID: GET /pet/{petId}', async ({ request }) => {
        const payload: Pet = await generatePetObject();
        await request.post(`${baseURL}/pet`, { data: payload });
        const uri:string = `pet/${payload.id}`;
        const response = await request.get(`${baseURL}/${uri}`);
        expect (response.status()).toBe(200);
        const responseBody = JSON.parse(await response.text())
        expect (responseBody.id).toBe(payload.id)
        expect (responseBody.category.id).toBe(payload.category.id)
        expect (responseBody.category.name).toBe(payload.category.name)
        expect (responseBody.name).toBe(payload.name)
        expect (responseBody.status).toBe(payload.status)
    });

    test('Add a new pet to the store: POST /pet', async ({ request }) => {
        const uri:string = `pet`;
        const payload: Pet = await generatePetObject();
        const response = await request.post(`${baseURL}/${uri}`, { data: payload });
        expect (response.status()).toBe(200);
        const responseBody = JSON.parse(await response.text())
        expect (responseBody.id).toBe(payload.id)
        expect (responseBody.category.id).toBe(payload.category.id)
        expect (responseBody.category.name).toBe(payload.category.name)
        expect (responseBody.name).toBe(payload.name)
        expect (responseBody.status).toBe(payload.status)
    });

    // test('Update an existing pet: PUT /pet', async ({ request }) => {
    //     // const response = page.getByPlaceholder('What needs to be done?');

    // });

    // test('Find Pets by status: GET /pet/findByStatus', async ({ request }) => {
    //     // const response = page.getByPlaceholder('What needs to be done?');

    // });

    // test('Find Pets by tags: GET /pet/findByTags', async ({ request }) => {
    //     // const response = page.getByPlaceholder('What needs to be done?');

    // });
});

async function generatePetObject(): Promise<Pet> {
    const epoch = Date.now()
    const petObject: Pet = {
        "id": epoch,
        "name": `bobik${epoch}`,
        "category": {
        "id": 1,
        "name": "Dogs"
        },
        "photoUrls": [
        `https://photos.google.com/photo/bobik${epoch}1`,
        `https://photos.google.com/photo/bobik${epoch}2`,
        ],
        "tags": [
        {
            "id": epoch,
            "name": `bobik${epoch}`
        }
        ],
        "status": "available"
    }
    return petObject
};

export interface Pet {
    id:	number;
    name: string;
    category: Category;
    photoUrls: string[];
    tags: Tag[];
    status: 'available' | 'pending' | 'sold';
}

export interface Category {
    id:	number;
    name: string;
}

export interface Tag {
    id:	number;
    name: string;
}