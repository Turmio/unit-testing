import { describe, expect, it } from 'vitest'
import todoRoutes from "./todoRoutes.js" 
import BackendError from '../errors/backendError.js';

describe('todo routes',() => {
    it("GET /todos", () => {
        // Arrange
        const expectedResult = ["todo"]
        const capturedEndpoints = {}
        const router = { get: (endpoint, callback) => { capturedEndpoints[endpoint] = callback }}
        const service = {getTodos: () => expectedResult}
        const results = []
        const response = {send: (data) => results.push(["todo"])}

        // Act
        todoRoutes(router, service)
        capturedEndpoints["/todos"](null, response)

        // Assert
        expect(results[0]).toEqual(expectedResult)

    });

    it("GET /todos BackendException", () => {
        
        // Arrange
        const capturedEndpoints = {}
        const router = { get: (endpoint, callback) => { capturedEndpoints[endpoint] = callback }}
        const service = {getTodos: () => {throw new BackendError("test")}}
        const results = []
        const response = { send: (data) => {} }
        response.status = (code) => { results.push(code); return response }

        // Act
        todoRoutes(router, service)
        capturedEndpoints["/todos"](null, response)

        // Assert
        expect(results[0]).to.equal(500)
    })
    
    it("GET /todos user error", () => {
        
        // Arrange
        const capturedEndpoints = {}
        const router = { get: (endpoint, callback) => { capturedEndpoints[endpoint] = callback }}
        const service = {getTodos: () => {throw new Error("test")}}
        const results = []
        const response = { send: (data) => {} }
        response.status = (code) => { results.push(code); return response }

        // Act
        todoRoutes(router, service)
        capturedEndpoints["/todos"](null, response)

        // Assert
        expect(results[0]).to.equal(400)
    })

    
    it("GET /todos/:ids", () => {
        // Arrange
        const expectedResult = ['todo1', 'todo2', 'todo3']
        const capturedEndpoints = {}
        const router = { get: (endpoint, callback) => { capturedEndpoints[endpoint] = callback }}
        const service = {getTodos: (ids) => ids.map(id => "todo" + id)}
        const results = []
        const response = {send: (data) => results.push(data)}

        // Act
        todoRoutes(router, service)
        capturedEndpoints["/todos/:ids"]({params: {ids: [1,2,3]}}, response)

        // Assert
        expect(results[0]).toEqual(expectedResult)

    });
});
