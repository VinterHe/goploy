package model

import (
	"errors"

	"github.com/zhenorzz/goploy/core"
)

// Project mysql table project
type Project struct {
	ID            uint32 `json:"id"`
	Name          string `json:"name"`
	URL           string `json:"url"`
	Path          string `json:"path"`
	Status        uint8  `json:"status"`
	PublisherID   uint32 `json:"publisherId"`
	PublisherName string `json:"publisherName"`
	CreateTime    int64  `json:"createTime"`
	UpdateTime    int64  `json:"updateTime"`
}

// Projects many project
type Projects []Project

// AddRow add one row to table project and add id to p.ID
func (p Project) AddRow() (uint32, error) {
	db := NewDB()
	result, err := db.Exec(
		"INSERT INTO project (name, url, path, create_time, update_time) VALUES (?, ?, ?, ?, ?)",
		p.Name,
		p.URL,
		p.Path,
		p.CreateTime,
		p.UpdateTime,
	)
	id, err := result.LastInsertId()
	return uint32(id), err
}

// EditRow edit one row to table project
func (p Project) EditRow() error {
	db := NewDB()
	_, err := db.Exec(
		`UPDATE project SET 
		  name = ?,
		  url = ?,
		  path = ?
		WHERE
		 id = ?`,
		p.Name,
		p.URL,
		p.Path,
		p.ID,
	)
	return err
}

// ChangeStatus for project
func (p Project) ChangeStatus() error {
	db := NewDB()
	_, err := db.Exec(
		"UPDATE project SET status = ? where id = ?",
		p.Status,
		p.ID,
	)
	return err
}

// Publish for project
func (p Project) Publish() error {
	db := NewDB()
	_, err := db.Exec(
		"UPDATE project SET publisher_id = ?, publisher_name = ?, update_time = ? where id = ?",
		p.PublisherID,
		p.PublisherName,
		p.UpdateTime,
		p.ID,
	)
	return err
}

// GetList project row
func (p Project) GetList() (Projects, error) {
	db := NewDB()
	rows, err := db.Query("SELECT id, name, url, path, status, create_time, update_time FROM project")
	if err != nil {
		return nil, err
	}
	var projects Projects
	for rows.Next() {
		var project Project

		if err := rows.Scan(&project.ID, &project.Name, &project.URL, &project.Path, &project.Status, &project.CreateTime, &project.UpdateTime); err != nil {
			return nil, err
		}
		projects = append(projects, project)
	}
	return projects, nil
}

// GetDepolyList user row by status
func (p Project) GetDepolyList() (Projects, error) {
	db := NewDB()
	rows, err := db.Query(`
		SELECT 
			project.id, 
			name, 
			status, 
			publisher_id, 
			publisher_name, 
			project.update_time 
		FROM 
			project_user 
		LEFT JOIN 
			project 
		ON 
			project_user.project_id = project.id
		WHERE 
			project_user.user_id = ?
		AND
			status = ?`,
		core.GolbalUserID,
		p.Status)
	if err != nil {
		return nil, err
	}
	var projects Projects
	for rows.Next() {
		var project Project

		if err := rows.Scan(&project.ID, &project.Name, &project.Status, &project.PublisherID, &project.PublisherName, &project.UpdateTime); err != nil {
			return projects, err
		}
		projects = append(projects, project)
	}
	return projects, nil
}

// GetData add project information to p *Project
func (p Project) GetData() (Project, error) {
	db := NewDB()
	var project Project
	err := db.QueryRow("SELECT id, name, url, path, status, create_time, update_time FROM project WHERE id = ?", p.ID).Scan(&project.ID, &project.Name, &project.URL, &project.Path, &project.Status, &project.CreateTime, &project.UpdateTime)
	if err != nil {
		return project, errors.New("数据查询失败")
	}
	return project, nil
}
