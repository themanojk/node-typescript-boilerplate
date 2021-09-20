import profileService from "./profile.service";
const mMock:any = profileService;
beforeAll(done => {
    mMock.getUsers = jest.fn();
    mMock.insertUser = jest.fn();
    done();
})

test('get users method should return array', async () => {
    const mockGetUsers = jest.fn();
    mockGetUsers.mockReturnValue(Promise.resolve([{
        "username": "aba",
        "password": "manoj",
        "updated_at": "2021-08-25T06:10:19.000Z",
        "created_at": "2021-08-25T06:10:19.000Z",
        "id": 6
    }]));
    mMock.getUsers.mockReturnValue(await mockGetUsers());
    const data = await mMock.getUsers();
    expect.arrayContaining(data);
});

test('inesrt users method should have username as a property', async () => {
    const body = {
        username: "admin",
        password: "admin"
    }
    const mockInsertUsers = jest.fn();
    mockInsertUsers.mockReturnValue(Promise.resolve(body));
    mMock.insertUser.mockReturnValue(await mockInsertUsers());
    const data = await mMock.insertUser(body);
    expect(data).toHaveProperty('username', body['username']);
});


afterAll(done => {
    done();
})