import { gql } from "graphql-tag";
import type { DocumentNode } from "graphql";

export const schema: DocumentNode = gql`
  """
  Subgraph definition for SidebarTesting (dspot/sidebar-testing)
  """
  type SidebarTestingState {
    nodes: [SidebarNode!]!
  }

  type SidebarNode {
    id: ID!
    title: String!
    icon: String
    expandedIcon: String
    children: [SidebarNode!]!
  }

  """
  Queries: SidebarTesting
  """
  type SidebarTestingQueries {
    getDocument(driveId: String, docId: PHID): SidebarTesting
    getDocuments: [SidebarTesting!]
  }

  type Query {
    SidebarTesting: SidebarTestingQueries
  }

  """
  Mutations: SidebarTesting
  """
  type Mutation {
    SidebarTesting_createDocument(driveId: String, name: String): String

    SidebarTesting_addNode(
      driveId: String
      docId: PHID
      input: SidebarTesting_AddNodeInput
    ): Int
    SidebarTesting_removeNode(
      driveId: String
      docId: PHID
      input: SidebarTesting_RemoveNodeInput
    ): Int
  }

  """
  Module: SidebarTesting
  """
  input SidebarTesting_AddNodeInput {
    id: ID!
    title: String!
    icon: String
    expandedIcon: String
    parentId: ID
  }
  input SidebarTesting_RemoveNodeInput {
    id: ID!
  }
`;
