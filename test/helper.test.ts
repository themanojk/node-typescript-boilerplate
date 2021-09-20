import { safeParse, handleStringParam } from '../src/utils/helper';

beforeAll(done =>{
    done();
});

test('Should properly parse a JSON object', () => {
    const obj = {
        foo: 'bar'
    };

    const data = safeParse(JSON.stringify(obj));
    expect(data).toEqual({foo: 'bar'});
});

test('Should return an empty value if string is not passed', () => {
    const value = handleStringParam(11);
    expect(value).toBe('');
});

afterAll(done => {
    done();
})